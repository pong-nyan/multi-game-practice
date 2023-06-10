# 명세

    백 < - > 프론트
    
## 프론트 -> 백 

### 키보드 입력 정보
```json
{
    // 'id': 42,
    'keyCode': ArrowLeft,
}
```

## 백 -> 프론트
```json
[
    {
        'id': 41,
        'x': 30,
        'y': 50,
        'color': #ff0011,
        'radius': '4px',
    },
    {
        same above
    },
    ...
]
```

백쪽에서 위에 값이 바뀌면 클라에게 보내기 

## 감지는 proxy 객체를 사용해서

```js
let json = {
    key: "value"
};

let handler = {
    set: function(obj, prop, value) {
        console.log(`Property ${prop} has been set to ${value}`);
        obj[prop] = value;
    }
};

let proxyJson = new Proxy(json, handler);

proxyJson.key = "new value"; // Property key has been set to new value
```


# road map

1. 소켓 여러개 연결
2. 테스트 코드 작성해보기
    a. 응답에 대한 기대
3. 게임 그리기
