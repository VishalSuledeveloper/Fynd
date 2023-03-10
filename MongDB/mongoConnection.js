const mongodb =require('mongodb');
const url ="mongod://localhost:27017";
const client =new mongodb.MongoClient(url);

async function fun(){
    try{
       await client.connect();
       const UserCollection= client.db("socialApp").collection("users");
       const cursor = UserCollection.find({});
       await cursor.forEach((docs)=>{
        console.log(docs);
       });
       console.log("Aggregate query");
       const aggregate=UserCollection.aggregate({
        $lookup:{
            from:"posts",
            localField:"username",
            foreignField:"username",
            as:"user_posts",
            pipeline: [
                {$project: {content: 1}},
                {$addFields: {postid:{$toString:"$_id"}}},
                { }
            ]
        }
       })

    }
    catch (e) {
        console.error(e);
      } finally {
        await client.close();//wait
      }
}