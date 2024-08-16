export const SearchDataByZipCode = async (zipCode: string) => {
    try {
        const data = (await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)).json()
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}