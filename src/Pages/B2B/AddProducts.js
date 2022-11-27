import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const AddProducts = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const {user} = useContext(AuthContext);
      const imageHostkey = process.env.REACT_APP_imgbb_key;

      const navigate = useNavigate();

      const handleAddProducts = (data) => {
        console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`
        fetch(url,{
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(imgData=>{
            // console.log(imgData);
            if(imgData.success){
                // console.log(imgData.data.url);
                const b2bproduct ={
                  p_details: data.ProductDetails,
                  p_price: data.price,
                  p_quantity:data.quantity,
                  p_category: data.category,
                  image:imgData.data.url,
                  email:user?.email

                }

                //product information to the database
                fetch('http://localhost:5000/b2bProducts',{
                  method: 'POST',
                  headers:{
                      'content-type': 'application/json',
                      authorization:`bearer${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(b2bproduct)
              })
              .then(res => res.json())
              .then(result =>{
                  console.log(result)})
                  toast.success(`${data.category}  added successfully`);
                  navigate('/dashboard/b2bmyShop')
            }
        })
      };

    
    return (
        <div className="w-96 p-7">
        <h2 className="text-3xl mt-4 mb-4">Add Product</h2>
        <form onSubmit={handleSubmit(handleAddProducts)}>
        <textarea className='w-96' {...register("ProductDetails",{ required: true })} placeholder="About Product" />
          
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            {...register("quantity", {
              required: "quantity is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Total Price</span>
          </label>
          <input
            type="text"
            {...register("price", {
              required: "price is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("img", {
              required: "Photo is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
           {errors.img && (
            <p className="text-red-500">{errors.img.message}</p>
          )}
        </div>
        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full mt-3 mb-3" />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
        <select {...register("category", { required: true })}>
            <option value="shoe">Shoe</option>
            <option value="jacket">Jacket</option>
            <option value="bag">Bag</option>
        </select>
          </div>
          <input
            className="btn btn-accent mt-4 w-full"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    );
    
}
export default AddProducts;