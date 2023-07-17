from requests import post, get

# print(post("http://localhost:3000/api/admin/img", json={
#     "jwtToken": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNsam45aW5pZzAwMDB2Y3Y0YW4xaXEybW0iLCJzdGF0dXMiOiJhZG1pbiIsImlwIjoiOjoxIiwiaWF0IjoxNjg5MTg3ODA4LCJpc3MiOiJ1cm46dGRyIiwiYXVkIjoidXJuOnRkciIsImV4cCI6MTY4OTI3NDIwOH0.fzZFzsnsslEcZlYMCbjso8JRpkg34m1Msdi0wCz4W-E",
#     "name": "eheh.json",
#     "image": "eyJpZCI6ImNsam45aW5pZzAwMDB2Y3Y0YW4xaXEybW0iLCJzdGF0dXMiOiJhZG1pbiIsImlwIjoiOjoxIiwiaWF0IjoxNjg5MTg3ODA4LCJpc3MiOiJ1cm46dGRyIiwiYXVkIjoidXJuOnRkciIsImV4cCI6MTY4OTI3NDIwOH0"
# }))

get("http://localhost:3000/api/units")

# jwt = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNsam45aW5pZzAwMDB2Y3Y0YW4xaXEybW0iLCJzdGF0dXMiOiJhZG1pbiIsImlwIjoiOjoxIiwiaWF0IjoxNjg5MTI5MDk5LCJpc3MiOiJ1cm46dGRyIiwiYXVkIjoidXJuOnRkciIsImV4cCI6MTY4OTIxNTQ5OX0.Sh8dZkPUzXxmf40ca7ghk-DKMoKiSglCKbxoF1x2FAM"


# data = post(
#     url="http://localhost:3000/api/admin/product", json={
#         "jwtToken": jwt,
#         "newProduct": {
#             "type": "1",
#             "id": "1",
#             "name": "1",
#             "qualification": "1",
#             "unit": "1",
#             "price1": "1",
#             "price2": "1",
#             "price3": "1",
#             "shortDescription": "1",
#             "longDescription": "1",
#         }
#     }
# )

# assert data.status_code == 200

# incorrectJwt = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNsam45aW5pZzAwMDH4B2Y0YW4xaXEybW0iLCJzdGF0dXMiOiJhZG1pbiIsImlwIjoiOjoxIiwiaWF0IjoxNjg5MTI5MDk5LCJpc3MiOiJ1cm46dGRyIiwiYXVkIjoidXJuOnRkciIsImV4cCI6MTY4OTIxNTQ5OX0.Sh8dZkPUzXxmf40ca7ghk-DKMoKiSglCKbxoF1x2FAM"


# incorrectData = post(
#     url="http://localhost:3000/api/admin/product", json={
#         "jwtToken": incorrectJwt,
#         "newProduct": {
#             "type": "1",
#             "id": "1",
#             "name": "1",
#             "qualification": "1",
#             "unit": "1",
#             "price1": "1",
#             "price2": "1",
#             "price3": "1",
#             "shortDescription": "1",
#             "longDescription": "1",
#         }
#     }
# )

# assert incorrectData.status_code == 401