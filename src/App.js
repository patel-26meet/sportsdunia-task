import React, { useState, useEffect } from 'react';
import { ArrowUpDown, Star } from 'lucide-react';
import './App.css'; 
import { useRef } from 'react';

// random data
const collegeData = [
  { name: "IIT Madras - Indian Institute of Technology - [IITM], Chennai", CDRank: 1, fees: "2,09,550", userReviews: "8.6/10", placement: 2000000, ranking: "#1st/131 in India", featured: false, highestPackage: "1,00,00,000", userReviewCount: 289 },
  { name: "IIT Delhi - Indian Institute of Technology - [IITD], Delhi", CDRank: 2, fees: "2,54,650", userReviews: "8.7/10", placement: 2000000, ranking: "#1st/35 in India", featured: false, highestPackage: "1,00,00,000", userReviewCount: 485 },
  { name: "Parul University, Vadodara", CDRank: 3, fees: "1,49,000", userReviews: "8.1/10", placement: 2000000, ranking: "#99th/147 in India", featured: true, highestPackage: "1,00,00,000", userReviewCount: 802 },
  { name: "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai", CDRank: 4, fees: "2,29,300", userReviews: "8.8/10", placement: 2000000, ranking: "#2nd/35 in India", featured: false, highestPackage: "1,00,00,000", userReviewCount: 306 },
  { name: "College A", CDRank: 5, fees: "1,80,000", userReviews: "7.9/10", userReviewCount: 750, placement: 1800000, ranking: "#15th/100 in India", featured: false, highestPackage: "80,00,000" },
  { name: "College B", CDRank: 6, fees: "2,10,000", userReviews: "8.2/10", userReviewCount: 820, placement: 1950000, ranking: "#8th/50 in India", featured: false, highestPackage: "90,00,000" },
  { name: "College C", CDRank: 7, fees: "1,95,000", userReviews: "8.0/10", userReviewCount: 680, placement: 1750000, ranking: "#20th/80 in India", featured: true, highestPackage: "85,00,000" },
  { name: "College D", CDRank: 8, fees: "2,20,000", userReviews: "8.3/10", userReviewCount: 900, placement: 2100000, ranking: "#5th/40 in India", featured: false, highestPackage: "95,00,000" },
  { name: "College E", CDRank: 9, fees: "1,70,000", userReviews: "7.8/10", userReviewCount: 600, placement: 1650000, ranking: "#30th/120 in India", featured: false, highestPackage: "75,00,000" },
  { name: "College F", CDRank: 10, fees: "2,00,000", userReviews: "8.4/10", userReviewCount: 850, placement: 1900000, ranking: "#12th/70 in India", featured: true, highestPackage: "1,10,00,000" },
  { name: "College G", CDRank: 11, fees: "1,85,000", userReviews: "7.7/10", userReviewCount: 720, placement: 1700000, ranking: "#25th/90 in India", featured: false, highestPackage: "92,00,000" },
  { name: "College H", CDRank: 12, fees: "2,15,000", userReviews: "8.5/10", userReviewCount: 980, placement: 2050000, ranking: "#3rd/30 in India", featured: false, highestPackage: "88,00,000" },
  { name: "College I", CDRank: 13, fees: "1,90,000", userReviews: "7.6/10", userReviewCount: 550, placement: 1600000, ranking: "#40th/150 in India", featured: false, highestPackage: "78,00,000" },
  { name: "College J", CDRank: 14, fees: "2,05,000", userReviews:"7.7/10", userReviewCount: 650, placement: 1700000, ranking: "#36th/150 in India", featured: false, highestPackage: "98,00,000" },
  { name: "College K", CDRank: 15, fees: "1,80,000", userReviews: "7.9/10", userReviewCount: 750, placement: 1800000, ranking: "#15th/100 in India", featured: false, highestPackage: "80,00,000" },
  { name: "College L", CDRank: 16, fees: "2,10,000", userReviews: "8.2/10", userReviewCount: 820, placement: 1950000, ranking: "#8th/50 in India", featured: false, highestPackage: "90,00,000" },
  { name: "College M", CDRank: 17, fees: "1,95,000", userReviews: "8.0/10", userReviewCount: 680, placement: 1750000, ranking: "#20th/80 in India", featured: true, highestPackage: "85,00,000" },
  { name: "College N", CDRank: 18, fees: "2,20,000", userReviews: "8.3/10", userReviewCount: 900, placement: 2100000, ranking: "#5th/40 in India", featured: false, highestPackage: "95,00,000" },
  { name: "College O", CDRank: 19, fees: "1,70,000", userReviews: "7.8/10", userReviewCount: 600, placement: 1650000, ranking: "#30th/120 in India", featured: false, highestPackage: "75,00,000" },
  { name: "College P", CDRank: 20, fees: "2,00,000", userReviews: "8.4/10", userReviewCount: 850, placement: 1900000, ranking: "#12th/70 in India", featured: true, highestPackage: "1,10,00,000" },
  { name: "College Q", CDRank: 21, fees: "1,85,000", userReviews: "7.7/10", userReviewCount: 720, placement: 1700000, ranking: "#25th/90 in India", featured: false, highestPackage: "92,00,000" },
  { name: "College R", CDRank: 22, fees: "2,15,000", userReviews: "8.5/10", userReviewCount: 980, placement: 2050000, ranking: "#3rd/30 in India", featured: false, highestPackage: "88,00,000" },
  { name: "College S", CDRank: 23, fees: "1,90,000", userReviews: "7.6/10", userReviewCount: 550, placement: 1600000, ranking: "#40th/150 in India", featured: false, highestPackage: "78,00,000" },
  { name: "College T", CDRank: 24, fees: "2,05,000", userReviews:"7.7/10", userReviewCount: 650, placement: 1700000, ranking: "#36th/150 in India", featured: false, highestPackage: "98,00,000" },
];


function App() {
  const [data, setData] = useState(collegeData.slice(0, 10));
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(null);

  //sorting function
  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const loadMoreData = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const currentLength = data.length;
      const newData = collegeData.slice(currentLength, currentLength + 10);
      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...newData]);
      }
      setLoading(false);
    }, 500); //Minor delay just to show the loading 
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        loadMoreData();
      }
    }, options);

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [hasMore, loading]);

  const filteredData = data.filter((college) =>
    college.name.toLowerCase().includes(searchQuery)
  );

  //colouring the numbers in rannking
  const formatRanking = (ranking) => {
    const parts = ranking.split(/(\d+)/);
    return (
      <>
        {parts.map((part, index) => 
          isNaN(part) ? part : <span key={index} className="total-colleges">{part}</span>
        )}      
      </>
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by college name..."
        onChange={handleSearch}
        value={searchQuery}
        className="search-input"
      />

      <table className="college-table">
        <thead>
            <tr>
              <th className="header-cell cd-rank-column">
                <div className="header-content">
                  CD Rank
                  <ArrowUpDown size={16} onClick={() => sortData('CDRank')} className="sort-icon" />
                </div>
              </th>
              <th>Colleges</th>
              <th className="header-cell">
                <div className="header-content">
                  Course Fees
                  <ArrowUpDown size={16} onClick={() => sortData('fees')} className="sort-icon" />
                </div>
              </th>
              <th>Placement</th>
              <th className="header-cell">
                <div className="header-content">
                  User Reviews
                  <ArrowUpDown size={16} onClick={() => sortData('userReviews')} className="sort-icon" />
                </div>
              </th>
              <th>Ranking</th>
            </tr>
          </thead>
        <tbody>
          {filteredData.map((college, index) => (
            <tr key={index} className={college.featured ? 'featured-row' : ''}>
              <td>{college.CDRank}</td>
              <td className="college-name-cell">
                {college.featured && <div className='featured-label'>Featured</div>}
                <span className="college-name">{college.name}</span>
              </td>
              <td className="fees-cell">
                <div className='fees-content'>₹{college.fees}</div>
                <div className="fees-subtext">
                  BE/B.Tech <br/>
                  -1st year fees</div>
              </td>
              <td className="placement-cell">
                <div className="placement-content">₹{college.placement}</div>  
                <div className="placement-subtext">Average Package</div>       
                <div className="placement-content">₹{college.highestPackage}</div> 
                <div className="placement-subtext">Highest Package</div>  
              </td>
              <td className='user-review-cell'> 
                <div className='user-review-content'>
                  <Star className='star'/>
                  <span>{college.userReviews}</span>
                </div>
                <div className="review-count">
                  Based on {college.userReviewCount} User reviews
                </div>
              </td>
              <td>{formatRanking(college.ranking)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {hasMore && (
        <div ref={loadingRef} className="loading">
          {loading ? 'Loading more colleges...' : 'Scroll to load more'}
        </div>
      )}
      {!hasMore && <p>No more colleges to show.</p>}
    </div>
  );
}

export default App;
