/**
 * While it is possible to create a backend in the
 * same file structure as the frontend, this can be
 * messy because if you have a route and a page in the
 * same directory, next will not know if it's rendering
 * an api or webpage under that url.
 * 
 * It is therefore better to just keep the backend and
 * frontend separate in app/api 
 */

// http://localhost:3000/api/users

export async function GET(request) {
    const sampleUsers = [
        {id:1, name: "john pork"},
        {id:2, name: "john pork II"},
        {id:3, name: "johnathan porkulus"},
    ];

    return new Response(JSON.stringify(sampleUsers));
}