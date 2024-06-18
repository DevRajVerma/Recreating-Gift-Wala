import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Sarah M.",
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
        name: "Alex K.",
        rating: 5,
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
        name: "James L.",
        rating: 5,
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    // Add more testimonials as needed
];

const CustomerTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsToShow = 1;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="customer-testimonials">
            <h2>Our Happy Customers</h2>
            <div className="testimonial-container">
                <div className="testimonials-wrapper">
                    {testimonials.slice(currentIndex, currentIndex + testimonialsToShow).map((testimonial, index) => (
                        <div className="testimonial" key={index}>
                            <div className="stars">
                                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <p className="testimonial-name">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
                <div className="nav-buttons">
                    <button className="nav-button" onClick={handlePrev} disabled={currentIndex === 0}>&#8249;</button>
                    <button className="nav-button" onClick={handleNext} disabled={currentIndex >= testimonials.length - testimonialsToShow}>&#8250;</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerTestimonials;
