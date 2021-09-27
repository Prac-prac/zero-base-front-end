console.log('hello, world!');

//브라우저에서는 입력을 prompt로 받으면 되지만, node js에서는 안되므로 txt로 입력받
const fs = require("fs"); //파일시스템이라는 라이브러리 가져와서
const input = fs.readFileSync("./js/javascript.txt", "utf8"); //읽을 파일, 변환할 언어

console.log(input);