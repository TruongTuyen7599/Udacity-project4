modules.exports.hello = async (event) => {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message:"Go serverless 3.0",
                input:event
            },
            null,
            2
        )
    }
  };
  