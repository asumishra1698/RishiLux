function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-slate-200">
      <h2 className="text-3xl font-semibold text-white">Privacy Policy</h2>
      <p className="max-w-4xl text-lg">
        We collect only the data required to provide and improve our services. We do not sell or share your personal information with third parties for advertising.
      </p>
      <div className="space-y-3 text-sm text-slate-300">
        <p><strong className="text-white">Data we collect:</strong> contact details, usage analytics, and support communications.</p>
        <p><strong className="text-white">How we use data:</strong> to deliver features, improve performance, and respond to inquiries.</p>
        <p><strong className="text-white">Retention:</strong> data is retained only as long as necessary for the stated purposes.</p>
        <p><strong className="text-white">Your choices:</strong> you can request access, updates, or deletion of your data at any time.</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
