import { NextRequest, NextResponse } from 'next/server'
import sitemap from '../../sitemap'

const INDEXNOW_KEY = '7a3bbe9d0517847589e8fc65809083ad'
const HOST = 'cagrcalculator.app'

/**
 * Pushes all sitemap URLs to IndexNow (Bing/Yandex) so they get
 * re-crawled without waiting for the next scheduled crawl.
 * Triggered monthly by the Vercel Cron Job in vercel.json.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const urlList = sitemap().map((entry) => entry.url)

  const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  })

  return NextResponse.json({
    submittedUrls: urlList.length,
    indexNowStatus: indexNowResponse.status,
  })
}
