import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const API_KEY = '2c7a50b6ac5f44b998ec58784a9f3c18';

const API = {
    NYTsearch: function(query) {
        let paramsObj = {
            'api-key': API_KEY,
            'q': query.searchTerm
        };

        if (query.startYear) {
            paramsObj.begin_date = query.startYear + '0101';
        }

        if (query.endYear) {
            paramsObj.end_date = query.endYear + '1231';
        }

        return axios.get(BASE_URL, {
            params: paramsObj
        });
    },
    getSavedArticles: function() {
        return axios.get('/api/savedarticles');
    },
    saveArticle: function(article) {
        return axios.post('/api/savedarticles', {
            article
        });
    },
    removeSavedArticle: function(articleId) {
        return axios.delete(`/api/savedarticles/${articleId}`);
    },
    findById: function(articleId) {
        return axios.get('/api/savedarticles');
    }
    
}

export default API;
