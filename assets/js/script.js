        
        
        const apiUrl = 'https://f7jf6krwt8.execute-api.us-east-1.amazonaws.com/resume-prod-v2/visitor-count';
        
        async function updateVisitorCount() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                document.getElementById('count').textContent = data.count;
            } catch (error) {
                console.error('Error fetching visitor count:', error);
                document.getElementById('count').textContent = 'Error loading';
            }
        }
        
        // Call the function when page loads
        updateVisitorCount();