import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MapPin, Phone, Send, Upload } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    requestType: '',
    description: '',
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = "w-full bg-bg-secondary border border-surface-border rounded-md px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary/50 transition-colors";
  const labelClass = "block text-sm font-medium text-text-secondary mb-2";

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] relative min-h-[40vh] flex items-center bg-bg-secondary">
        <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block text-xs font-medium text-accent-primary uppercase tracking-[0.15em] mb-4">
            {t('nav.contact') as string}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mb-6">
            {t('cont.hero.title') as string}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t('cont.hero.subtitle') as string}
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-bg-primary">
        <div className="container-main mx-auto">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                {t('cont.form.title') as string}
              </h2>

              {submitted ? (
                <div className="p-6 bg-accent-primary/10 border border-accent-primary/30 rounded-lg">
                  <p className="text-accent-primary font-medium">
                    {t('cont.form.submit') as string} — {t('cont.info.email.val') as string}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{t('cont.form.name') as string}</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder=""
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t('cont.form.company') as string}</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{t('cont.form.email') as string}</label>
                      <input
                        type="email"
                        className={inputClass}
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t('cont.form.phone') as string}</label>
                      <input
                        type="tel"
                        className={inputClass}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{t('cont.form.country') as string}</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t('cont.form.type') as string}</label>
                      <select
                        className={inputClass}
                        value={formData.requestType}
                        onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                      >
                        <option value="">{t('cont.form.type.other') as string}</option>
                        <option value="machining">{t('cont.form.type.machining') as string}</option>
                        <option value="fixture">{t('cont.form.type.fixture') as string}</option>
                        <option value="machine">{t('cont.form.type.machine') as string}</option>
                        <option value="quality">{t('cont.form.type.quality') as string}</option>
                        <option value="welding">{t('cont.form.type.welding') as string}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t('cont.form.desc') as string}</label>
                    <textarea
                      className={`${inputClass} min-h-[120px] resize-y`}
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className={`${labelClass} flex items-center gap-2 cursor-pointer`}>
                      <div className="relative">
                        <Upload size={16} className="text-accent-primary" />
                      </div>
                      {t('cont.form.file') as string}
                      <span className="text-text-muted text-xs">({t('cont.form.file.hint') as string})</span>
                    </label>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      accept=".pdf,.step,.stp,.jpg,.jpeg,.png"
                    />
                    <div
                      className="border-2 border-dashed border-surface-border rounded-md px-4 py-6 text-center cursor-pointer hover:border-accent-primary/30 transition-colors"
                      onClick={() => {
                        const input = document.querySelector('input[type="file"]') as HTMLInputElement;
                        input?.click();
                      }}
                    >
                      <Upload size={20} className="text-text-muted mx-auto mb-2" />
                      <span className="text-xs text-text-muted">{t('cont.form.file.hint') as string}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 accent-accent-primary"
                      required
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                    />
                    <label htmlFor="privacy" className="text-xs text-text-muted leading-relaxed">
                      {t('cont.form.privacy') as string}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-hover text-white px-8 py-4 rounded-md font-medium text-sm transition-all duration-200 hover:shadow-accent-glow"
                  >
                    <Send size={16} />
                    {t('cont.form.submit') as string}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                {t('cont.info.title') as string}
              </h2>
              <div className="bg-bg-secondary border border-surface-border rounded-lg p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-accent-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-text-muted uppercase tracking-wider mb-1">
                      {t('cont.info.email') as string}
                    </span>
                    <span className="text-sm text-text-primary">{t('cont.info.email.val') as string}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-accent-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-text-muted uppercase tracking-wider mb-1">
                      {t('cont.info.address') as string}
                    </span>
                    <span className="text-sm text-text-secondary">{t('cont.info.address.val') as string}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-text-muted uppercase tracking-wider mb-1">
                      {t('cont.info.phone') as string}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {t('cont.info.phone') === 'Phone' ? 'Upon request' : 'Talep üzerine'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
