import TableProducts from "../components/TableProducts";
import { useFetch } from "../hooks/useFetch";
import ReactPaginate from 'react-paginate'
import { useState } from "react";

const Dashboard = () => {

    const { getUser,userData } = useFetch();
    const [input, setInput] = useState('');
    const [option, setOption] = useState('all');
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 15 ;

    getUser('https://randomuser.me/api/?results=150')
        
/**
 * PERF: pagination
 *
 */
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = userData?.results.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(userData?.results.length / itemsPerPage);

    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userData?.results.length;
    setItemOffset(newOffset);
    }

/**
 * PERF: Filter ----> filter by gender
*        Filter -----> ilter by input
 *
 */
    let filterUser 

    if (!input) { }
     else { filterUser = userData?.results.filter( u => u.name.first.toLowerCase().includes(input.toLowerCase().trim() )) }
    if(option !='all'){ filterUser = userData?.results.filter( u=> u.gender === option) }
    if(option !='all' && input){ setOption('all') }
        else{}

    

    return (
        <div className="h-auto py-7 max-w-[1920px] mx-auto ">
            <div className='text-center py-4 px-3 my-5 gap-5 flex items-center justify-center'>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search users' className='w-[500px] py-3 px-2 rounded-xl shadow-xl outline-none' />
                <select onChange={(e) => setOption(e.target.value)} className='py-3 px-3 bg-white rounded-xl shadow-xl text-center' >
                    <option>all</option>
                    <option>female</option>
                    <option>male</option>
                </select>
            </div>
            <table className='w-6/12 mx-auto py-5 px-2 mb-20  border-2 overflow-hidden border-white shadow-2xl rounded-xl'>
                <thead>
                    <tr>
                        <th className='py-3 px-6 bg-white text-xl font-bold'>Id</th>
                        <th className='py-3 px-6 bg-white text-xl font-bold'>Name</th>
                        <th className='py-3 px-6 bg-white text-xl font-bold'>Last N.</th>
                        <th className='py-3 px-6 bg-white text-xl font-bold'>Gender</th>
                        <th className='py-3 px-6 bg-white text-xl font-bold'>email</th>
                    </tr>
                </thead>
                     <TableProducts data={currentItems} filter={filterUser} /> 
            </table>
            {
            !input &&  option=='all'?  <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName='py-3 px-3 flex items-center justify-center gap-10 my-7'
                pageLinkClassName=' py-3 px-4 border-1 transition-all hover:bg-blue-500 hover:text-white rounded-md'
                activeLinkClassName='bg-blue-500 text-white rounded-md border-2'
                previousLinkClassName=' px-4 py-4 bg-blue-500 text-white rounded-md'
                nextLinkClassName=' px-4 py-4 bg-blue-500 text-white rounded-md'
            /> : ''
            }
        </div>
    );
};

export default Dashboard

