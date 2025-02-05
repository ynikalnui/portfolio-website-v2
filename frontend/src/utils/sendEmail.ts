import axios from 'axios'
import toast from 'react-hot-toast'

export type TFormData = {
  name: string
  email: string
  message: string
  honeypot?: string | null
}

export const sendEmail = async (data: TFormData) => {
  const apiEndpoint = '/api/email'

  toast.loading('Sending your email...', { id: 'send-mail' })
  try {
    const response = await axios.post(apiEndpoint, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    toast.success(response.data.message, { id: 'send-mail' })
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data.message || 'An error occurred', { id: 'send-mail' })
    } else {
      toast.error('An unexpected error occurred', { id: 'send-mail' })
    }
  }
}
