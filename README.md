# Api Documentation

## Places Endpoint

- base url : `https://<cloudrun_service_name>.a.run.app/`
- base image url : `https://storage.googleapis.com/<bucket_name>/`

### Place

- Path : `/Place`
- Method : `GET`
- Response :

```json
{
  "success": false,
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
  "success": false,
  "message": "place fetched successfully",
  "data": {
    "place_id": "f0001",
    "name": "paris",
    "image": "paris.png",
    "desc": "lorem ipsum dolor sit amet..."
  }
}
```

### Recommendation

- Path : `/recommendation`
- Method : `POST`
- Response :

```json
{
  "success": true,
  "message": "recommendation fetched successfully",
  "data": [
    {
        "place_id": "1",
        "name": "paris",
        "image": "paris.png",
        "desc": "lorem ipsum dolor sit amet..."
    },
    {
      "place_id": "2",
      "name": "paris",
      "image": "paris.png",
      "desc": "lorem ipsum dolor sit amet..."
    }
    
  ]
}
```


