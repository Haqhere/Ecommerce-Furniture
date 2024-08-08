

// import React, { useContext, useEffect, useState } from 'react';
// import { StoreContext } from '../../../Components/Context/StoreContext';
// import './AdProducts.css';
// import axios from 'axios';

// const AdProducts = () => {
//   const { Fitems } = useContext(StoreContext);
//   const [addItem, setAddItem] = useState(false);
//   const [edititem, setEdititem] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [formdata, setFormData] = useState({
//     id: "",
//     name: "",
//     image: "",
//     price: '',
//     description: "",
//     category: ""
//   });

//   useEffect(() => {
//     setProducts(Fitems);
//   }, [Fitems]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/products/${id}`);
//       alert("Deleted successfully");
//       setProducts(products.filter(product => product.id !== id));
//     } catch (error) {
//       console.error("There was an error deleting the product!", error);
//       alert("Failed to delete the product.");
//     }
//   };

//   const handleEdit = (item) => {
//     setFormData(item);
//     setEdititem(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formdata,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
      
//       await axios.put(`http://localhost:5000/products/${formdata.id}`, formdata);
//       console.log(`${formdata.id}`)
//       alert('Updated successfully')
//       setProducts(products.map(product => product.id === formdata.id ? formdata : product));
//       setEdititem(false);
     
//     } catch (error) {
//       console.error('There was an error:', error);
//       alert(`Failed to complete: ${error.message}`);
//     }
//   };

//   const handleSubmitAdd = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/products', formdata);
//       alert('Added successfully');
//       setProducts([...products, res.data]);
//       setAddItem(false);
//       setFormData({ id: "", name: "", image: "", price: '', description: "", category: "" });
//     } catch (error) {
//       console.error('There was an error:', error);
//       alert('Error adding');
//     }
//   };

//   return (
//     <>
      
//       <button className='add-btn' onClick={() => setAddItem(true)}>ADD ITEMS</button>

//       <div className='Product-card'>
//         {products.map((item, index) => (
//           <div className='card' key={index}>
//             <div className="card-img-container">
//               <img src={item.image} alt="img" />
//             </div>
//             <div className="card-info-container">
//               <h2>{item.name}</h2>
//               <h6>{item.description}</h6>
//               <h3>${item.price}</h3>
//             </div>
//             <div className="card-remove-edit">
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//               <button onClick={() => handleEdit(item)}>Edit</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {edititem && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>EDIT ITEM</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formdata.name}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="image"
//                 placeholder="Image URL"
//                 value={formdata.image}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="price"
//                 placeholder="Price"
//                 value={formdata.price}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="description"
//                 placeholder="Description"
//                 value={formdata.description}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="category"
//                 placeholder="Category"
//                 value={formdata.category}
//                 onChange={handleChange}
//               />
//               <button type="submit">Save</button>
//               <button type="button" onClick={() => setEdititem(false)}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}

//       {addItem && (
//         <div className='modal-overlay'>
//           <div className='modal-content'>
//             <h2>ADD ITEM</h2>
//             <form onSubmit={handleSubmitAdd}>
//               <input
//                 type='text'
//                 name='name'
//                 placeholder='Name'
//                 value={formdata.name}
//                 onChange={handleChange}
//               />
//               <input
//                 type='text'
//                 name='image'
//                 placeholder='Image URL'
//                 value={formdata.image}
//                 onChange={handleChange}
//               />
//               <input
//                 type='text'
//                 name='price'
//                 placeholder='Price'
//                 value={formdata.price}
//                 onChange={handleChange}
//               />
//               <input
//                 type='text'
//                 name='description'
//                 placeholder='Description'
//                 value={formdata.description}
//                 onChange={handleChange}
//               />
//               <input
//                 type='text'
//                 name='category'
//                 placeholder='Category'
//                 value={formdata.category}
//                 onChange={handleChange}
//               />
//               <button type='submit'>Add</button>
//               <button type='button' onClick={() => setAddItem(false)}>Cancel</button>
//             </form>
//           </div>
//         </div>
//       )}
     
//     </>
//   );
// };

// export default AdProducts;

























import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../../Components/Context/StoreContext';
import './AdProducts.css';
import axios from 'axios';

const AdProducts = () => {
  const { Fitems } = useContext(StoreContext);
  const [addItem, setAddItem] = useState(false);
  const [edititem, setEdititem] = useState(false);
  const [products, setProducts] = useState([]);
  const [formdata, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    price: '',
    description: "",
    category: ""
  });

  useEffect(() => {
    setProducts(Fitems);
  }, [Fitems]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      alert("Deleted successfully");
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("There was an error deleting the product!", error);
      alert("Failed to delete the product.");
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEdititem(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/products/${formdata.id}`, formdata);
      console.log(`${formdata.id}`)
      alert('Updated successfully');
      setProducts(products.map(product => product.id === formdata.id ? formdata : product));
      resetForm();
      setEdititem(false);
    } catch (error) {
      console.error('There was an error:', error);
      alert(`Failed to complete: ${error.message}`);
    }
  };

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/products', formdata);
      alert('Added successfully');
      setProducts([...products, res.data]);
      resetForm();
      setAddItem(false);
    } catch (error) {
      console.error('There was an error:', error);
      alert('Error adding');
    }
  };

  const resetForm = () => {
    setFormData({ id: "", name: "", image: "", price: '', description: "", category: "" });
  };

  return (
    <>
      <button className='add-btn' onClick={() => setAddItem(true)}>ADD ITEMS</button>

      <div className='Product-card'>
        {products.map((item, index) => (
          <div className='card' key={index}>
            <div className="card-img-container">
              <img src={item.image} alt="img" />
            </div>
            <div className="card-info-container">
              <h2>{item.name}</h2>
              <h6>{item.description}</h6>
              <h3>${item.price}</h3>
            </div>
            <div className="card-remove-edit">
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleEdit(item)}>Edit</button>
            </div>
          </div>
        ))}
      </div>

      {edititem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>EDIT ITEM</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formdata.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formdata.image}
                onChange={handleChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={formdata.price}
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formdata.description}
                onChange={handleChange}
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formdata.category}
                onChange={handleChange}
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => { resetForm(); setEdititem(false); }}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {addItem && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <h2>ADD ITEM</h2>
            <form onSubmit={handleSubmitAdd}>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={formdata.name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='image'
                placeholder='Image URL'
                value={formdata.image}
                onChange={handleChange}
              />
              <input
                type='text'
                name='price'
                placeholder='Price'
                value={formdata.price}
                onChange={handleChange}
              />
              <input
                type='text'
                name='description'
                placeholder='Description'
                value={formdata.description}
                onChange={handleChange}
              />
              <input
                type='text'
                name='category'
                placeholder='Category'
                value={formdata.category}
                onChange={handleChange}
              />
              <button type='submit'>Add</button>
              <button type='button' onClick={() => { resetForm(); setAddItem(false); }}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdProducts;
