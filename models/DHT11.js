const mongoose = require('mongoose'); //""와 '의 차이는..?
const DHT11Schema = mongoose.Schema(
    {
        tmp: {
            type : String,
            required : true,
         },
         hum: {
            type : String,
            required : true,
         },
        created_at:{
            type : Date,
            default : Date.now
        },

    }
);
module.exports = mongoose.model("DHT11", DHT11Schema); //다 소문자로 바뀌고 +s가 만들어켜 컬렉션이 됨
//스키마를 다른 파일에서 사용 할 수 있도록  데이터 베이스가 연결이 되면 테이블 컬렉션 만듬(컬렉션의 이름, 스키마 파일정보)