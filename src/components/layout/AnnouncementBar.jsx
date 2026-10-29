import { SITE } from '../../config/site';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  return (
    <div className="announcement" role="region" aria-label="Announcement">
      <p>{SITE.announcement}</p>
    </div>
  );
}