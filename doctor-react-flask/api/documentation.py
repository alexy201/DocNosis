import requests, json
import base64

#ADDING A USER

#NORMAL:
data={
    "name":"alex sima", 
    "username": "alsima",
    "password": "2612896",
    "contact_info":"alex.sima@yale.edu",
    "bio":"18 year old male, 5 ft. 9 in., No Allergies",
    "type":"normal"
    }
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
res = requests.post('http://127.0.0.1:5000/signup', data=json.dumps(data), headers=headers)
print(res)

#DOCTOR:
with open("credentials.png", "rb") as image_file:
    encoded_img = base64.b64encode(image_file.read()).decode('utf-8')
data={
    "name":"alex sima", 
    "username": "alsima",
    "password": "2612896",
    "contact_info":"alex.sima@yale.edu",
    "bio":"18 year old male, 5 ft. 9 in., No Allergies",
    "credentials": encoded_img,
    "type":"doctor"
    }
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
res = requests.post('http://127.0.0.1:5000/signup', data=json.dumps(data), headers=headers)
print(res)

#------------------------------------------------------------------------
#DELETING A USER
data={
    "uid":"64d0e5d1-9c2f-4f74-9057-6a8273f8dde5"
    }
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
res = requests.post('http://127.0.0.1:5000/delete', data=json.dumps(data), headers=headers)
print(res)

#------------------------------------------------------------------------
#UPLOAD/DELETE A PHOTO
with open("img.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
data = {
    "img":encoded_string,
    "img_name":"first_pic"
}
delet = {
    "img_name":"first_pic"
}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
res = requests.post('http://127.0.0.1:5000/upload_image', data=json.dumps(data), headers=headers)
res = requests.post('http://127.0.0.1:5000/delete_image', data=json.dumps(delet), headers=headers)
print(res)


#------------------------------------------------------------------------
#GET USER DATA
data = {
    "username":"alsima",
    "password":"2612896"
}
#OR
data = {
    "uid":"9792e068-2091-458b-b695-655cf6ae30b7"
}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
res = requests.get('http://127.0.0.1:5000/get_info', data=json.dumps(data), headers=headers)
print(res.json())