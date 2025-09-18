// API service for backend communication
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Helper method to get auth headers
  getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async register(userData) {
    return this.request('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }

  async login(credentials) {
    return this.request('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  }

  async getCurrentUser() {
    return this.request('/users/me');
  }

  async getAllUsers() {
    return this.request('/users/');
  }

  // Posts methods
  async getPosts(limit = 50, offset = 0) {
    return this.request(`/posts/?limit=${limit}&offset=${offset}`);
  }

  async getPost(postId) {
    return this.request(`/posts/${postId}`);
  }

  async createPost(postData) {
    return this.request('/posts/', {
      method: 'POST',
      body: JSON.stringify(postData)
    });
  }

  async updatePost(postId, postData) {
    return this.request(`/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify(postData)
    });
  }

  async deletePost(postId) {
    return this.request(`/posts/${postId}`, {
      method: 'DELETE'
    });
  }

  async getPostsByUser(userId) {
    return this.request(`/posts/user/${userId}`);
  }

  // Comments methods
  async getComments(postId) {
    return this.request(`/comments/posts/${postId}`);
  }

  async createComment(postId, commentData) {
    return this.request(`/comments/posts/${postId}`, {
      method: 'POST',
      body: JSON.stringify(commentData)
    });
  }

  async deleteComment(commentId) {
    return this.request(`/comments/${commentId}`, {
      method: 'DELETE'
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;