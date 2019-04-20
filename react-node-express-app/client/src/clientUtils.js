/**
 * Misc utils for the client.
 */
class ClientUtils {

    static performFetch = function(path, body, method = 'POST') {
      console.log(`Calling (${method}) ${path} ${body}`)
      const options = {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
      }
      if (method === 'GET' || method === 'HEAD')
        delete options['body']
        // console.log(path);
      // console.log(JSON.stringify(body));
      return fetch(path, options)
    }
  }
  
  export default ClientUtils
  