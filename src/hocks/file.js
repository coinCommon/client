// fetch для загрузки файла
import axios from "axios";
import {useEffect, useState} from "react";

export async function downloadFile(fileName) {
    const response = await fetch(process.env.REACT_APP_API_URL + 'api/documents/download/' + fileName)

        if (response.status === 200) {
                let blob = await response.blob()
                const downloadUrl = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = downloadUrl
                link.download = fileName
                document.body.appendChild(link)
                link.click()
                link.remove()
        }

}
export async function fetchWeather(latLong) {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        // params: {q: '54.1838, 45.1749'},
        params: {q: latLong},
        headers: {
            'X-RapidAPI-Key': '41dad0a03cmshaa7e4b27641c4c8p16b39ajsn952fe80c5fd4',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }
    try {
        const response = await axios.request(options);
        const result = await response.data;
        return result
    } catch (e) {
        return {message: 'Error'}
    }

}
