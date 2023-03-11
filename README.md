# Full-stack-project

First Screen displaying a form 

![image](https://user-images.githubusercontent.com/80510950/224491669-c8becf16-94a0-4d87-b83b-7094325a8bde.png)

Second Screen

![image](https://user-images.githubusercontent.com/80510950/224491852-7b34fe27-9f6e-44c5-8618-1ace5297d236.png)

Third Screen

![image](https://user-images.githubusercontent.com/80510950/224491903-b06253ea-bc10-4420-b127-2c004f113d77.png)

For updating information of the user

![image](https://user-images.githubusercontent.com/80510950/224491991-261509c7-58e4-48a9-bc1d-dded943199fd.png)

APIs used can be checked via postman

Adding information of the user 
                              axios.post("http://localhost:5000/user")

![image](https://user-images.githubusercontent.com/80510950/224492496-0b516e98-e196-4cce-acc0-f7659468292d.png)

Getting information about all the users 
                                       axios.get("http://localhost:5000/users")

View information of a selected single user 
                                          axios.get("http://localhost:5000/user/${id}")
                                          
Updating information about a user
                                 axios.put("http://localhost:5000/user/${id}")
