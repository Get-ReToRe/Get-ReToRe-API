# Api Documentation

## Places Endpoint

- base url : `https://<cloudrun_service_name>.a.run.app/`
- base image url : `https://storage.googleapis.com/<bucket_name>/`

### Places

- Path : `/Place`
- Method : `GET`
- Response :

```json
{
  "error": false,
  "message": "Places fetched successfully",
  "data": [
    {
       "place_id": "f0001",
      "name": "paris",
      "image": "paris.png",
      "desc": "lorem ipsum dolor sit amet..."
    },
    {
      "place_id": "f0001",
      "name": "paris",
      "image": "paris.png",
      "desc": "lorem ipsum dolor sit amet..."
    }
    
  ]
}
```

### Place Detail

- Path : `/place/{id}`
- Method : `GET`
- Response :

```json
{
  "error": false,
  "message": "place fetched successfully",
  "data": {
    "place_id": "f0001",
    "name": "paris",
    "image": "paris.png",
    "desc": "lorem ipsum dolor sit amet..."
  }
}
```



