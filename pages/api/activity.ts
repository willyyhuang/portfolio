import axios from 'axios'

export const getActivity = async () => {
    const response = await axios.get('https://www.boredapi.com/api/activity')
    if (response.status === 200) {
        return response.data
    }
    return null
}