# Full-stack-project

First Screen displaying a form 

![image](https://user-images.githubusercontent.com/80510950/226200170-cc1507e6-9ede-4c34-9e9d-2dd75d58c521.png)

Second Screen

![image](https://user-images.githubusercontent.com/80510950/226200633-80ce5d68-4132-44e6-95b5-f647ef29594d.png)

Third Screen

![image](https://user-images.githubusercontent.com/80510950/226200669-908b9ef9-921c-4dff-944f-3d377b0b69aa.png)

For updating information of the user

![image](https://user-images.githubusercontent.com/80510950/226200717-6a6bcbc9-a4e0-4875-ae7d-984a30760e5f.png)

APIs used can be checked via postman

Adding information of the user 
                              axios.post("http://localhost:8080/user")

![image](https://user-images.githubusercontent.com/80510950/224492496-0b516e98-e196-4cce-acc0-f7659468292d.png)

Getting information about all the users 
                                       axios.get("http://localhost:8080/users")

View information of a selected single user 
                                          axios.get("http://localhost:8080/user/${id}")
                                          
Updating information about a user
                                 axios.put("http://localhost:8080/user/${id}")
