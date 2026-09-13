import { PortfolioData, UserProfile } from '../types';

const API_BASE_URL = 'http://localhost:8080/api';

export const portfolioApiService = {
  /**
   * 포트폴리오 DB 저장 API
   */
  async savePortfolio(portfolio: PortfolioData, token?: string): Promise<{ success: boolean; data?: PortfolioData; message?: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/portfolios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify(portfolio)
      });
      if (!response.ok) throw new Error('Failed to save portfolio');
      const data = await response.json();
      return { success: true, data };
    } catch (error: any) {
      console.warn('[API Warning] 백엔드 연결 대기 상태입니다. 로컬 스토리지에 저장합니다.', error);
      localStorage.setItem('liquid_portfolio_data', JSON.stringify(portfolio));
      return { success: true, data: portfolio, message: 'LocalStorage에 저장됨 (서버 연결 대기)' };
    }
  },

  /**
   * DB에서 포트폴리오 불러오기 API
   */
  async getPortfolioById(id: string): Promise<PortfolioData | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/portfolios/${id}`);
      if (!response.ok) throw new Error('Portfolio not found');
      return await response.json();
    } catch (error) {
      const local = localStorage.getItem('liquid_portfolio_data');
      return local ? JSON.parse(local) : null;
    }
  }
};