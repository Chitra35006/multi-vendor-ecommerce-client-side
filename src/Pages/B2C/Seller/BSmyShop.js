import React from 'react';

const BSmyShop = () => {
    return (
        <div className="overflow-x-auto w-full">

            <div className="mt-5">My Shop</div>

            <div className="avatar mt-5">
                <div className="w-100 rounded">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
                </div>
            </div>

            
            <table className="table w-full mt-5">
                
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Top Buyer</th>
                    <th>Company</th>
                    <th>Most Demanded</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Zemlak, Daniel and Leannon
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                    <td>Bag</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
                
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Carroll Group
                    <br/>
                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                    </td>
                    <td>Bag</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
                
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Rowe-Schoen
                    <br/>
                    <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                    </td>
                    <td>Shoe</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
                
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Wyman-Ledner
                    <br/>
                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                    </td>
                    <td>Bag</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
                </tbody>

                
            </table>
        </div>
    );
};

export default BSmyShop;