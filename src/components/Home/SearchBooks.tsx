import React, { useEffect, useState } from 'react'
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import { config } from '@/config/env';
import { InputNumber } from 'primereact/inputnumber';

interface SearchBookQuery {
    setData: (books: any[]) => void;
    initialData: any[];
    setLoading: (loading: boolean) => void;
}

const SearchBooks = ({setData, initialData, setLoading}: SearchBookQuery) => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [year, setYear] = useState<number | null>();

    const api = config.api
    

   useEffect(() => {
        if (!title){
            setData(initialData)
            return  
        }
        const getTitle = setTimeout(async () => {
            setLoading(true)
            try {
                const res = await axios.get(`${api}/books/search/title?title=${title}`);
                setData(res.data.data.books);
                setLoading(false)
            } catch (err) {
                setLoading(false)
                console.error(err);
            }
        }, 300);

        return () => clearTimeout(getTitle);
    }, [title]);

    useEffect(() => {
        if (!author){
            setData(initialData)
            return  
        }; 
        const getAuthor = setTimeout(async () => {
            setLoading(true)
            try {
                const res = await axios.get(`${api}/books/search/author?author=${author}`);
                setData(res.data.data.Authors);
                setLoading(false)
            } catch (err) {
                setLoading(false)
                console.error(err);
            }
        }, 300);

        return () => clearTimeout(getAuthor);
    }, [author]);

    useEffect(() => {
        if (!year){
            setData(initialData)
            return  
        } 
        const getYear = setTimeout(async () => {
            setLoading(true)
            try {
                const res = await axios.get(`${api}/books/search/year?year=${year}`);
                setData(res.data.data.Years);
                setLoading(false)
            } catch (err) {
                setLoading(false)
                console.error(err);
            }
        }, 300);

        return () => clearTimeout(getYear);
    }, [year]);

  return (
    <div className="card flex gap-x-10 mb-5">
            <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title of Book'/>
            <InputText value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Enter name of Author'/>
            <InputNumber value={year} onValueChange={(e) => setYear(e.value)} placeholder='Enter Year of the book' useGrouping={false}/>
    </div>
  )
}

export default SearchBooks