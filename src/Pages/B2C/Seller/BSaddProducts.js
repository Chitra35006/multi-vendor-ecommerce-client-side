import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BSaddProducts = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const {user} = useContext(AuthContext);
      const imageHostkey = process.env.REACT_APP_imgbb_key;

      const  navigate =
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
                console.log(imgData.data.url);
                const b2cproduct ={
                  p_details: data.ProductDetails,
                  p_price: data.price,
                  p_quantity:data.quantity,
                  p_category: data.category,
                  image:imgData.data.url,
                  email:user?.email

                }
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
              <span className="label-text">Product Price</span>
            </label>
        <select {...register("price", { required: true })}>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">400</option>
        </select>

          </div>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("img", {
              required: "Phpto is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
           {errors.img && (
            <p className="text-red-500">{errors.img.message}</p>
          )}
        </div>
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
};

export default BSaddProducts;