from flask import Flask,jsonify,request
import firebase_admin
import uuid
from firebase_admin import credentials
from firebase_admin import db
from firebase_admin import storage
import base64

def connectDB():
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred, {
        "databaseURL": "https://docnosis-default-rtdb.firebaseio.com/",
        'storageBucket': 'docnosis.appspot.com'
    })
    return db.reference("users"), db.reference("doctors"), db.reference("records")

users, doctors, records = connectDB()
bucket = storage.bucket()
userlist = users.get()
doctorlist = doctors.get()
recordlist = records.get()
app = Flask(__name__)

def upload(name, content):
    img = base64.b64decode(content)
    img_file = open('img/image.png', 'wb')
    img_file.write(img)
    img_file.close()
    blob = bucket.blob(name)
    blob.upload_from_filename('img/image.png')

@app.route("/signup", methods=['POST'])
def create_user():
  userdata = request.json
  if request.method == 'POST' and len(userdata) > 0:
    print("ADDING USER: ")
    print(userdata)
    uid = str(uuid.uuid4())
    username = userdata["username"]
    name = userdata["name"]
    password = userdata["password"]
    contact_info = userdata["contact_info"]
    bio = userdata["bio"]
    user_type = userdata["type"]
    if (user_type == "normal"):
        users.push( {
            "uid": uid, 
            "username": username, 
            "name": name, 
            "password": password,
            "contact_info": contact_info, 
            "bio": bio} )
    else: 
        upload(userdata["name"], userdata["credentials"])
        doctors.push( {
            "uid": uid, 
            "username": username, 
            "name": name, 
            "password": password,
            "contact_info": contact_info, 
            "bio": bio,
            "rating": 5.0,
            "verified": 0} )
    return userdata
  else:
    print("Nothing There!")
    return "Sorry, there was an error."

@app.route("/delete_user", methods=['POST'])
def delete_user():
  userdata = request.json
  if request.method == 'POST' and len(userdata) > 0:
    print("DELETING USER: ")
    print(userdata)
    uid = userdata["uid"]
    if (len(userlist) > 0):
        for key, value in userlist.items():
            if(value["uid"] == uid):
                users.child(key).set({})
    if (len(doctorlist) > 0):
        for key, value in doctorlist.items():
            if(value["uid"] == uid):
                users.child(key).set({})
    return "Successfully deleted user."
  else:
    print("Nothing There!")
    return "Sorry, there was an error."

@app.route("/upload_image", methods=['POST'])
def upload_image():
  userdata = request.json
  if request.method == 'POST' and len(userdata) > 0:
    upload(userdata["img_name"], userdata["img"])
    return "Image successfully uploaded."
  else:
    print("Nothing There!")
    return "Sorry, there was an error."

@app.route("/delete_image", methods=['POST'])
def delete_image():
  userdata = request.json
  if request.method == 'POST' and len(userdata) > 0:
    blob = bucket.blob(userdata["img_name"])
    blob.delete()
    return "Image successfully deleted."
  else:
    print("Nothing There!")
    return "Sorry, there was an error."

@app.route("/get_info", methods=['GET'])
def get_info():
  userdata = request.json
  if request.method == 'GET' and len(userdata) > 0:
    if "uid" in userdata:
        if (len(userlist) > 0):
            for key, value in userlist.items():
                if(value["uid"] == userdata["uid"]):
                    if (value["uid"] == userdata["uid"]):
                        return jsonify(users.child(key).get())
        if (len(doctorlist) > 0):
            for key, value in doctorlist.items():
                if(value["uid"] == userdata["uid"]):
                    if (value["uid"] == userdata["uid"]):
                        return jsonify(users.child(key).get())
        return "Cannot find User"
    else:
        username = userdata["username"]
        password = userdata["password"]
        if (len(userlist) > 0):
            for key, value in userlist.items():
                if(value["username"] == username):
                    if (value["password"] == password):
                        return jsonify(users.child(key).get())
        if (len(doctorlist) > 0):
            for key, value in doctorlist.items():
                if(value["username"] == username):
                    if (value["password"] == password):
                        return jsonify(users.child(key).get())
        return "Username or Password is Incorrect"
  else:
    print("Nothing There!")
    return "Sorry, there was an error."



















@app.route("/")
def main():
    result = users.get('/users', None)
    return str(result)