const fs = require('fs');

// const basicPath = `C:/Users/hoon/Downloads/${process.argv[2]}`;
const basicPath = `C:/Users/hoon/Downloads/test`;
const videosExt = ['.mp4', '.mov', '.avi'];
const capturedExt = ['.png', '.aae'];
const duplicatedExt = ['.jpg'];
const files = fs.readdirSync(basicPath);

// 비디오가 있을때 작동
const videos = files.filter((param) => {
    videosExt.map((videoExt) => {
        if (videoExt === param.slice(param.lastIndexOf('.'), param.length)) {
            // video폴더가 없으면 새로 생성한다.
            if (!fs.existsSync(basicPath + "/video")) {
                fs.mkdirSync(basicPath + "/video");
                console.log(`video 폴더 생성`);
            }

            // 생성한 video 폴더에 해당 확장자가 videosExt인 아이들을 옮긴다.
            fs.renameSync(`${basicPath}/${param}`, `${basicPath}/video/${param}`);
            console.log(`${basicPath}/${param} => ${basicPath}/video/${param}`);
        }
    });
});

// 사진이 있을때 작동
const captured = files.filter((param) => {
    capturedExt.map((captureExt) => {
        if (captureExt === param.slice(param.lastIndexOf('.'), param.length)) {

            // captured폴더가 없으면 새로 생성한다.
            if (!fs.existsSync(basicPath + "/captured")) {
                fs.mkdirSync(basicPath + "/captured");
                console.log(`captured 폴더 생성`);
            }

            // 생성한 captured 폴더에 해당 확장자가 capturedExt인 아이들을 옮긴다.
            fs.renameSync(`${basicPath}/${param}`, `${basicPath}/captured/${param}`);
            console.log(`${basicPath}/${param} => ${basicPath}/captured/${param}`);
        }
    });
});

// 보정안된 사진 저장
const duplicated = files.filter((param) => {
    duplicatedExt.map((duplicateExt) => {
        if (duplicateExt === param.slice(param.lastIndexOf('.'), param.length)) {
            // duplicated폴더가 없으면 새로 생성한다.
            if (!fs.existsSync(basicPath + "/duplicated")) {
                fs.mkdirSync(basicPath + "/duplicated");
                console.log(`duplicated 폴더 생성`);
            }
            if (param[param.lastIndexOf('_') + 1] !== "E") {

                // 생성한 duplicated 폴더에 해당 확장자가 duplicateExt인 아이들을 옮긴다.
                fs.renameSync(`${basicPath}/${param}`, `${basicPath}/duplicated/${param}`);
                console.log(`${basicPath}/${param} => ${basicPath}/duplicated/${param}`);
            }
        }
    })
})