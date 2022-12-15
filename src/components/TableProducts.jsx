const TableProducts = ({data, filter}) => {
    if (!filter[0]) {
        return (
            <tbody className='text-center'>
            {
            data?.map((result, i) => (
                <tr key={result.login.uuid} className={` cursor-pointer ${i % 2 === 0?  '#F6F8FF' : 'bg-blue-400'}  hover:scale-105 transition-all duration-300`}>
                    <td className='py-3 px-6 font-medium'>{result.id.name? result.id.name : 'N/A'}</td>
                    <td className='font-medium py-3 px-3'>{result.name.first}</td>
                    <td className='font-medium py-3 px-3'>{result.name.last}</td>
                    <td className='font-medium py-3 px-3'>{result.gender}</td>
                    <td className='font-medium py-3 px-3'>{result.email}</td>
                </tr>
            ))
             }
            </tbody>
            
        );

    }
        return (
            <tbody className='text-center'>
            {
            filter?.map((result, i) => (
                <tr key={result.login.uuid} className={` cursor-pointer ${i % 2 === 0?  '#F6F8FF' : 'bg-blue-400'}  hover:scale-105 transition-all duration-300`}>
                    <td className='py-3 px-6 font-medium'>{result.id.name? result.id.name : 'N/A'}</td>
                    <td className='font-medium py-3 px-3'>{result.name.first}</td>
                    <td className='font-medium py-3 px-3'>{result.name.last}</td>
                    <td className='font-medium py-3 px-3'>{result.gender}</td>
                    <td className='font-medium py-3 px-3'>{result.email}</td>
                </tr>
            ))
             }
            </tbody>
            
    );


    };

export default TableProducts
