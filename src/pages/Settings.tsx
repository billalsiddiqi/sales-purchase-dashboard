import { useEffect, useState } from "react"
import type { SettingsData } from "../types"
import Input from "../components/ui/Input"

export default function Settings() {
  const [settings, setSettings] = useState<SettingsData | null>(null)
  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch("/data/settings.json")
      .then((res) => res.json())
      .then(setSettings)
  }, [])

  function validate(field: string, value: string) {
    let error: string | null = null

    switch (field) {
      case "email":
        error = /^\S+@\S+\.\S+$/.test(value) ? null : "ایمیل نامعتبر است"
        break
      case "phone":
        error = /^\+?[0-9\s\-]{8,15}$/.test(value) ? null : "شماره تماس نامعتبر است"
        break
      default:
        error = value.trim() === "" ? "این بخش الزامی میباشد" : null
    }

    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const hasErrors = Object.values(errors).some((e) => e !== null)

  if (!settings) return <p>در حال بارگذاری تنظیمات...</p>

  return (
    <div className="space-y-6 my-8 max-w-2xl mx-auto">
      {/* Toast */}
        {saved && (
          <div className="mt-4 p-3 text-sm rounded-lg bg-green-100 text-green-800 shadow-md animate-fade-in">
            ✅ تنظیمات با موفقیت ذخیره شد
          </div>
        )}
      <h1 className="text-2xl font-bold">تنظیمات</h1>

      <div className="grid gap-4 text-right" dir="ltr">
        <Input
          label="نام شرکت"
          value={settings.companyName}
          onChange={(val) => {
            setSettings((prev) => prev ? { ...prev, companyName: val } : prev)
            validate("companyName", val)
          }}
          error={errors.companyName}
        />

        <Input
          label="آدرس"
          value={settings.address}
          onChange={(val) => {
            setSettings((prev) => prev ? { ...prev, address: val } : prev)
            validate("address", val)
          }}
          error={errors.address}
        />

        <Input
          label="ایمیل"
          value={settings.email}
          onChange={(val) => {
            setSettings((prev) => prev ? { ...prev, email: val } : prev)
            validate("email", val)
          }}
          error={errors.email}
        />

        <Input
          label="شماره تماس"
          value={settings.phone}
          direction="ltr"
          onChange={(val) => {
            setSettings((prev) => prev ? { ...prev, phone: val } : prev)
            validate("phone", val)
          }}
          error={errors.phone}
        />

        {/* Currency dropdown */}
        <div dir="rtl">
          <label className="block text-sm font-medium mb-1">واحد پول</label>
          <select
            value={settings.currency}
            onChange={(e) =>
              setSettings((prev) =>
                prev ? { ...prev, currency: e.target.value } : prev
              )
            }
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="افغانی">افغانی</option>
            <option value="دالر">دالر</option>
            <option value="یورو">یورو</option>
          </select>
        </div>

        {/* Language dropdown */}
        <div dir="rtl">
          <label className="block text-sm font-medium mb-1">زبان</label>
          <select
            value={settings.language}
            onChange={(e) =>
              setSettings((prev) =>
                prev ? { ...prev, language: e.target.value } : prev
              )
            }
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="فارسی">فارسی</option>
            <option value="انگلیسی">انگلیسی</option>
            <option value="پشتو">پشتو</option>
          </select>
        </div>

        {/* Theme dropdown */}
        <div dir="rtl">
          <label className="block text-sm font-medium mb-1">حالت نمایش</label>
          <select
            value={settings.theme}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
            onChange={(e) =>
              setSettings((prev) =>
                prev ? { ...prev, theme: e.target.value as "روشن" | "تاریک" } : prev
              )
            }
          >
            <option value="روشن">روشن</option>
            <option value="تاریک">تاریک</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          disabled={hasErrors}
          onClick={() => {
            setSaved(true)
            setTimeout(() => setSaved(false), 3000)
          }}
          className={`mt-4 px-4 py-2 rounded-lg transition ${
            hasErrors
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          ذخیره تغییرات
        </button>

        
      </div>
    </div>
  )
}
