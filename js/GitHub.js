class GitHub {
  constructor() {
    this.client_id = '4308aa219d753d2076fe';
    this.client_secret = '11ea76c24fa70f63194b8bf0f505a30e3a2c86a4';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }
  async getUser(user) {
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      // 如果回傳的變數跟值名稱相同，直接寫一次即可
      // profile: profile, repos: repos
      profile,repos
    }
  }
}