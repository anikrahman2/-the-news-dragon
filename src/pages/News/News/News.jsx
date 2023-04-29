import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../editorsInsight/EditorsInsight';

const News = () => {
  const selectedNews = useLoaderData();
  const { title, details, image_url, category_id } = selectedNews;
  return (
    <div>
      <Card className="mb-4">
        <Card.Body>
          <Card.Img variant="top" src={image_url} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant='danger'><FaArrowLeft className='me-2'></FaArrowLeft>All news in this category</Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;