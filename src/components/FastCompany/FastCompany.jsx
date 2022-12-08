import React, { useState } from "react";
import api from '../../API/';


const FastCompany = () => {
    
    const [users, setUsers] = useState(api.users.fetchAll());
    // console.log(users);

    const handelDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const renderPhrase  = (number) => {

        const lastOne = Number(number.toString().slice(-1));
        // console.log(lastOne);

        if (number > 4 && number < 15) return "Человек тусанет";
        if([2, 3, 4].indexOf(lastOne) >= 0 ) return "Человека тусанет";
        if (lastOne === 1) return 'Человек тусанет'
        
        return "Человек тусанет";
    };

    return (
        <>
            <h2>
                Fast Company
            </h2>
            <h2>
                <span className={"badge bg-" + (users.length > 0 ? 'primary' : 'danger')}>
                    {users.length > 0 ? ` ${users.length} ${renderPhrase(users.length)} с тобой сегодня ` : `Никто с тобой не тусанет `} 
                </span>
            </h2>
        {users.length > 0 &&
            <table className="table">
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Качества</th>
                        <th>Профессия</th>
                        <th>Встретился раз</th>
                        <th>Оценка</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.qualities.map((item) => <span 
                                    className={"badge m-1 bg-" + item.color }
                                    key={item._id}>{item.name}
                                </span>)}
                            </td>
                            <td>
                                {user.profession.name}
                            </td>
                            <td>
                                {user.completedMeetings}
                            </td>
                            <td>
                                {user.rate}
                            </td>
                            <td>
                                <button className={ "btn btn-danger"} onClick={() => handelDelete(user._id )}>
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        }
        </>
    );
};

export default FastCompany;