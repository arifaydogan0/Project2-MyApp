import axios from "axios";

function getData(number){
    return new Promise(async (resolve, reject) => 
    {
        if(typeof number == "number"){
            var { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
            var { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
            let userim = user;
            userim.posts = post;
            resolve(userim);
        }

        reject("'Number' türünde bir veri girmelisiniz");
    })
}

export default getData;