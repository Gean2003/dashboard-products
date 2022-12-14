const AlertMessage = ({alert}) => {

    return (
        <div>
            <p className='text-red-500 text-center'>{alert.msg }</p>
        </div>
    );
};

export default AlertMessage

