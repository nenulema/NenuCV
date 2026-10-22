import { PortfolioDatabase, ProjectItem } from '../types/portfolio';
import { initialPortfolioData } from '../data/initialData';

const LOCAL_STORAGE_KEY = 'risha_portfolio_db_v1';

export async function fetchPortfolioData(): Promise<PortfolioDatabase> {
  try {
    const res = await fetch('/api/portfolio');
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(json.data));
        return json.data;
      }
    }
  } catch (err) {
    console.warn('API request failed, falling back to local cache or seed data:', err);
  }

  // Fallback to local storage
  const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {
      console.error('Invalid cached data:', e);
    }
  }

  // Fallback to initial seed data
  return initialPortfolioData;
}

export async function savePortfolioData(data: PortfolioDatabase): Promise<boolean> {
  data.updatedAt = new Date().toISOString();
  // Always update local cache immediately for instant UI responsiveness
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

  try {
    const res = await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const resJson = await res.json();
      return resJson.success;
    }
  } catch (err) {
    console.warn('Backend save error, saved locally in browser storage:', err);
  }
  return true;
}

export async function resetPortfolioData(): Promise<PortfolioDatabase> {
  const fresh = JSON.parse(JSON.stringify(initialPortfolioData));
  fresh.updatedAt = new Date().toISOString();
  await savePortfolioData(fresh);
  return fresh;
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
