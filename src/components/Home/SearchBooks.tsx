import React, { useEffect, useState } from 'react'
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import { config } from '@/config/env';
import { InputNumber } from 'primereact/inputnumber';

interface SearchBookQuery {
    handleSearchChange: (searchTerm: string | null) => void
    setLoading: (loading: boolean) => void;
}

const SearchBooks = ({handleSearchChange, setLoading}: SearchBookQuery) => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [year, setYear] = useState<number | null>();

    useEffect(() => {
        if (!title) {
            handleSearchChange(null);
            return;
        }
        
        const getTitle = setTimeout(() => {
            setAuthor('')
            setYear(null)
            const searchPath = `/books/search/title?title=${title}`;
            handleSearchChange(searchPath);
        }, 300);

        return () => clearTimeout(getTitle);
    }, [title, handleSearchChange]); 

    useEffect(() => {
        if (!author) {
            handleSearchChange(null);
            return;
        }; 
        
        const getAuthor = setTimeout(() => {
            setTitle('')
            setYear(null)
            const searchPath = `/books/search/author?author=${author}`;
            handleSearchChange(searchPath);
        }, 300);

        return () => clearTimeout(getAuthor);
    }, [author, handleSearchChange]);

    useEffect(() => {
        if (!year) {
            handleSearchChange(null);
            return;
        }
        
        const getYear = setTimeout(() => {
            setAuthor('')
            setTitle('')
            const searchPath = `/books/search/year?year=${year}`;
            handleSearchChange(searchPath);
        }, 300);

        return () => clearTimeout(getYear);
    }, [year, handleSearchChange]);


  return (
    <div className="card flex gap-x-10 mb-5">
            <InputText value={title} className="p-inputtext-sm" onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title of Book'/>
            <InputText value={author} className="p-inputtext-sm" onChange={(e) => setAuthor(e.target.value)} placeholder='Enter name of Author'/>
            <InputNumber value={year} className="p-inputtext-sm" onChange={(e) => setYear(e.value)} placeholder='Enter Year of the book' useGrouping={false}/>
    </div>
  )
}

export default SearchBooks