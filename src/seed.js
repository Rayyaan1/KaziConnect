const axios = require('axios');

const seedPosts = async () => {
  const posts = [
    {
      title: 'The Importance of Reliable Handyman Services',
      content: 'At KaziKonnect, we understand that finding reliable handyman services can be a challenge. Our platform connects you with experienced professionals who can handle a wide range of tasks, from plumbing repairs to painting and electrical work. Whether you need a quick fix or a major renovation, our skilled handymen are here to help. Explore how KaziKonnect ensures quality and reliability in every job.'
    },
    {
      title: 'How KaziKonnect Streamlines Service Delivery',
      content: 'KaziKonnect is revolutionizing the way service delivery is managed. By leveraging technology, we make it easy for customers to find and book qualified handymen in their area. Our platform offers detailed profiles, customer reviews, and transparent pricing, ensuring that you can make informed decisions. Learn more about how KaziKonnect is making home maintenance simpler and more efficient for everyone.'
    },
    {
      title: 'Top Tips for Choosing the Right Handyman',
      content: 'Choosing the right handyman is crucial for the success of your home improvement projects. At KaziKonnect, we provide tips and guidelines to help you select the best professional for your needs. From checking credentials to reading customer reviews, we cover all the important aspects to consider. Discover how KaziKonnect helps you make the right choice and ensures your satisfaction with our top-rated handymen.'
    },
    {
      title: 'Why Regular Home Maintenance is Important',
      content: 'Regular home maintenance is essential for preserving the value and functionality of your property. At KaziKonnect, we offer a range of services to help you stay on top of your maintenance tasks. From seasonal check-ups to emergency repairs, our handymen are ready to assist you. Learn about the benefits of regular maintenance and how KaziKonnect can help you keep your home in top condition.'
    },
    {
      title: 'The Benefits of Professional Handyman Services',
      content: 'Hiring a professional handyman offers numerous benefits, including expertise, efficiency, and safety. At KaziKonnect, our handymen are highly trained and experienced, ensuring that your home projects are completed to the highest standards. Whether you need a minor repair or a major renovation, you can trust our professionals to deliver exceptional results.'
    },
    {
      title: 'How to Prepare Your Home for a Handyman Visit',
      content: 'Preparing your home for a handyman visit can ensure a smooth and efficient service. At KaziKonnect, we provide guidelines to help you get ready for our handymen. From clearing the work area to making a list of tasks, these tips will help you maximize the efficiency of the service and ensure that all your needs are addressed. Learn how to prepare and what to expect during a handyman visit from KaziKonnect.'
    }
  ];

  try {
    for (const post of posts) {
      await axios.post('http://localhost:5500/posts', post);
      console.log(`Inserted post: ${post.title}`);
    }
    console.log('All posts have been inserted.');
  } catch (error) {
    console.error('Error inserting posts:', error);
  }
};

seedPosts();
