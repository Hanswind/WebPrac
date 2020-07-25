export const api = {
    fetchRandom : async (width, height) => {
        return await fetch(`https://picsum.photos/${width}/${height}`).then(res =>
            res.json()
            );
    } 
};