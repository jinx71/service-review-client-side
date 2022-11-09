import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import toast, { Toaster } from 'react-hot-toast';
const AddService = () => {
    useEffect(() => {
        document.title = `Add Service : ${document.title}`;
    });
    const { serverStatus, setServerStatus } = useContext(AuthContext);
    const handleAddServiceSubmit = (event) => {
        event.preventDefault()
        const service = {}
        service["serviceName"] = event.target.serviceName.value;
        service["price"] = event.target.price.value;
        service["image"] = event.target.image.value;
        service["video"] = event.target.video.value;
        service["galaryImage"] = [
            {
                "src": event.target.gImage1.value,
                "width": 4,
                "height": 3
            },
            {
                "src": event.target.gImage2.value,
                "width": 1,
                "height": 1
            },
            {
                "src": event.target.gImage3.value,
                "width": 3,
                "height": 4
            },
            {
                "src": event.target.gImage4.value,
                "width": 3,
                "height": 4
            },
            {
                "src": event.target.gImage5.value,
                "width": 4,
                "height": 3
            },
        ]
        service["Description_One"] = event.target.descriptionOne.value;
        service["Description_Two"] = event.target.descriptionTwo.value;
        service["Description_Three"] = event.target.descriptionThree.value;
        service["rating"] = {
            "5": 0,
            "4": 0,
            "3": 0,
            "2": 0,
            "1": 0,
            "0": 0
        }
        service["id"] = 700
        service["feature"] = [
            {
                "title": event.target.f1Title.value,
                "description": event.target.f1description.value
            },
            {
                "title": event.target.f2Title.value,
                "description": event.target.f2description.value
            },
            {
                "title": event.target.f3Title.value,
                "description": event.target.f3description.value
            },
            {
                "title": event.target.f4Title.value,
                "description": event.target.f4description.value
            }
        ]
        console.log(service)



        fetch('https://travel-guide-server-jinx71.vercel.app/add-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Service Added Successfully")
                }
                else {
                    toast.error("Failure : Service addition failure")
                }
            }
            )

    }

    return (
        <div className="">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add A Service</h1>
                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    <div>
                        <div><Toaster /></div>
                    </div>
                </div>

                <div className="card border w-full shadow-2xl dark:bg-gray-800">
                    <div className="card-body">
                        <form onSubmit={handleAddServiceSubmit}>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Banner Image</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Banner Image URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add a video</span>
                                    </label>
                                    <input type="text" name="video" placeholder="Video URL" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gallary Image 1</span>
                                    </label>
                                    <input type="text" name="gImage1" placeholder="Gallary Images URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gallary Image 2</span>
                                    </label>
                                    <input type="text" name="gImage2" placeholder="Gallary Images URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gallary Image 3</span>
                                    </label>
                                    <input type="text" name="gImage3" placeholder="Gallary Images URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gallary Image 4</span>
                                    </label>
                                    <input type="text" name="gImage4" placeholder="Gallary Images URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gallary Image 5</span>
                                    </label>
                                    <input type="text" name="gImage5" placeholder="Gallary Images URL" className="input input-bordered" />
                                </div>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Why to go there?</span>
                                    </label>
                                    <input type="text" name="descriptionOne" placeholder="Add Something..." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">What will amaze you?</span>
                                    </label>
                                    <input type="text" name="descriptionTwo" placeholder="Add Something..." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Make a Booking Now</span>
                                    </label>
                                    <input type="text" name="descriptionThree" placeholder="Add Something" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feature 01 Title</span>
                                    </label>
                                    <input type="text" name="f1Title" placeholder="Title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feature 01 Description</span>
                                    </label>
                                    <input type="text" name="f1description" placeholder="Description" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feature 02 Title</span>
                                    </label>
                                    <input type="text" name="f2Title" placeholder="Title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feature 02 Description</span>
                                    </label>
                                    <input type="text" name="f2description" placeholder="Description" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feature 03 Title</span>
                                    </label>
                                    <input type="text" name="f3Title" placeholder="Title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feature 03 Description</span>
                                    </label>
                                    <input type="text" name="f3description" placeholder="Description" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feature 04 Title</span>
                                    </label>
                                    <input type="text" name="f4Title" placeholder="Title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feature 04 Description</span>
                                    </label>
                                    <input type="text" name="f4description" placeholder="Description" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Add Service</button>
                            </div>
                        </form>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default AddService;