"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { Column } from 'primereact/column';
import BookStats from '../Home/BookStats';


export interface BookAttributes {
  id: string
  title: string
  author: string
  published_year: number
  createdAt: Date
  updatedAt: Date
}

export default function BookTable2() {
    const [books, setBooks] = useState<BookAttributes[]>([])
    const [totalresults, setResults] = useState<number>(0)
    const [totalcopies, setTotalCopies] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
     const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const api = process.env.NEXT_PUBLIC_BACKEND_API

    useEffect(() => {
        const fetchBooks = async() => {
            const res = await axios.get(`${api}/books`)
            setBooks(res.data.data.books)
            setResults(res.data.data.totalRecords)
            setTotalCopies(res.data.data.totalCopies)
            setTotalPages(res.data.data.totalPages)
        }

        fetchBooks()
    }, [])

    useEffect(() => {
        const fetchNewData = async() => {
            const pageNumber = (first / rows) + 1;
            setCurrentPage(pageNumber)
            const res = await axios.get(`${api}/books?page=${pageNumber}`)
            console.log(`${api}/books?page=${pageNumber}`)
            setBooks(res.data.data.books)
        }

        fetchNewData()
    }, [first])

    return (
        <div className="w-full p-6">
            <div className="mb-10">
                <BookStats results={String(totalresults)} copies={String(totalcopies)}/>
            </div>


            <div className="card">
                <DataTable value={books} rows={10} sortField="title" sortOrder={1}  showGridlines tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="ID" sortable style={{ width: '25%' }}></Column>
                    <Column field="title" header="Book Title" sortable style={{ width: '25%' }}></Column>
                    <Column field="author" header="Author" sortable style={{ width: '25%' }}></Column>
                    <Column field="published_year" header="Published Year" sortable style={{ width: '25%' }}></Column>
                    <Column field="createdAt" header="Created At" sortable style={{ width: '25%' }}></Column>
                    <Column field="updatedAt" header="Updated At" sortable style={{ width: '25%' }}></Column>
                </DataTable>
                <div className='mt-5'>
                    <Paginator first={first} rows={rows} totalRecords={totalresults} onPageChange={onPageChange} />
                </div>
            </div>


            <div className='mt-5'>
                Page {currentPage} out of {totalPages}
            </div>


        </div>
    );
}
        