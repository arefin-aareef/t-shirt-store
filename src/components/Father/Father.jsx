import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;