"use client"
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { Column } from 'primereact/column';
import BookStats from '../Home/BookStats';
import SearchBooks from '../Home/SearchBooks';
import { BookAttributes } from '@/interfaces';
import { config } from '@/config/env';
import AddBook from '../Home/AddBook';
import LoadingSpinners from '../Global/LoadingSpinner';




export default function BookTable2() {
    const [books, setBooks] = useState<BookAttributes[]>([])
    const [homeBooks, setHomeBooks] = useState<BookAttributes[]>([])
    const [totalBooks, setTotalBooks] = useState<number>(0)
    const [totalResults, setTotalResults] = useState<number>(0)
    const [totalcopies, setTotalCopies] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
     const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQueryPath, setSearchQueryPath] = useState<string | null>(null);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const api = process.env.NEXT_PUBLIC_BACKEND_API

    const fetchBooks = useCallback(async (pageNumber: number = 1, searchPath: string | null = null) => {
        setLoading(true);
        try {
            const basePath = searchPath || '/books';
            
            // If searchPath already contains '?', use '&' for page, otherwise use '?'
            const connector = searchPath && searchPath.includes('?') ? '&' : '?';
            
            const url = `${api}${basePath}${connector}page=${pageNumber}`;
            
            const res = await axios.get(url);

            setBooks(res.data.data.books || res.data.data.Authors || res.data.data.Years); 

            if(basePath === '/books'){
                setTotalCopies(res.data.data.totalCopies);
                setTotalBooks(res.data.data.totalRecords);
            }
            
            setTotalResults(res.data.data.totalRecords)
            setTotalPages(res.data.data.totalPages);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

   const handleSearchChange = useCallback((newSearchPath: string | null) => {
    setFirst(0); 
    setSearchQueryPath(newSearchPath);
}, []);

    // useEffect(() => {
    //     const fetchBooks = async() => {
    //         try{
    //             setLoading(true)
    //             const res = await axios.get(`${api}/books`)
    //             setBooks(res.data.data.books)
    //             setHomeBooks(res.data.data.books)
    //             setResults(res.data.data.totalRecords)
    //             setTotalCopies(res.data.data.totalCopies)
    //             setTotalPages(res.data.data.totalPages)
    //             setLoading(false)
    //         }catch(error){
    //             setLoading(false)
    //             console.error(error)
    //         }

    //     }

    //     fetchBooks()
    // }, [])

    useEffect(() => {
        fetchBooks(1, null);
    }, [fetchBooks]);

    useEffect(() => {
        const pageNumber = (first / rows) + 1;
        setCurrentPage(pageNumber);

        fetchBooks(pageNumber, searchQueryPath);
        
    }, [first, searchQueryPath, rows, fetchBooks]);


    return (
        <div className="w-full p-6">

            <div className="mb-10">
                <BookStats results={String(totalBooks)} copies={String(totalcopies)}/>
            </div>

            <div className='mb-5'>
                <p className='text-sm mb-3'>Results: {totalResults}</p>
                <div className='flex flex-row justify-between items-center'>
                    <SearchBooks handleSearchChange={handleSearchChange} setLoading={setLoading}/>
                    <AddBook triggerRefetch={fetchBooks}/>
                </div>
            </div>


            <div className="card">
                <DataTable value={books} rows={10} sortField="createdAt" sortOrder={-1}  loading={loading}  showGridlines tableStyle={{ minWidth: '50rem', fontSize: '0.75rem' }}>
                    <Column field="id" header="ID" sortable style={{ width: '25%' }}></Column>
                    <Column field="title" header="Book Title" sortable style={{ width: '25%' }}></Column>
                    <Column field="author" header="Author" sortable style={{ width: '25%' }}></Column>
                    <Column field="published_year" header="Published Year" sortable style={{ width: '25%' }}></Column>
                    <Column field="createdAt" header="Created At" sortable style={{ width: '25%' }}></Column>
                    <Column field="updatedAt" header="Updated At" sortable style={{ width: '25%' }}></Column>
                </DataTable>
                <div className='mt-5'>
                    <Paginator first={first} rows={rows} totalRecords={totalResults} onPageChange={onPageChange} />
                </div>
            </div>


            <div className='mt-5'>
                Page {currentPage} out of {totalPages}
            </div>


        </div>
    );
}
        