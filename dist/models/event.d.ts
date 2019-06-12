import { Types } from 'mongoose';
import User from './user';
import Location from './subModels/shared/location';
import RichContent from './subModels/shared/richContent';
import IShared from './shared';
import Image from './subModels/shared/image';
declare namespace Event {
    interface Model {
        _id?: Types.ObjectId;
        remoteID?: string;
        name?: string;
        start?: Date;
        end?: Date;
        creator?: Types.ObjectId | User.Model;
        rRule?: IShared.GeneralMap<any>;
        rDuration?: number;
        rDate?: string[];
        categories?: string[];
        location?: Location.Model;
        groupID?: Types.ObjectId[];
        calendarID?: Types.ObjectId[];
        calendarIDs?: Types.ObjectId[];
        images?: Image.Model[];
        image?: Image.Model;
        clubID?: Types.ObjectId;
        price?: string;
        shortLink?: string;
        reservations?: Reservation[];
        public?: boolean;
        type?: Types.ObjectId;
        richContent?: RichContent.Model;
        maxGuests?: number;
        maxParticipants?: number;
        recurring?: number;
        displayInFeed?: boolean;
        blockCalendar?: boolean;
    }
    enum RecurringFrequency {
        YEARLY = 0,
        MONTHLY = 1,
        WEEKLY = 2,
        DAILY = 3,
        HOURLY = 4,
        MINUTELY = 5,
        SECONDLY = 6
    }
    interface Reservation {
        _id?: Types.ObjectId;
        creator: Types.ObjectId | User.Model;
        owner: Types.ObjectId | User.Model;
        participants: Participant[];
        meta?: ReservationMeta;
    }
    interface Participant {
        _id?: Types.ObjectId;
        userID: Types.ObjectId | User.Model | null;
        name: string;
        checkedIn?: boolean;
        paid?: boolean;
    }
    type ReservationMeta = ReservationBaseMeta | CarReservationMeta | GolfReservationMeta;
    interface ReservationBaseMeta {
        notes: string;
    }
    interface CarReservationMeta extends ReservationBaseMeta {
        vehicleID: Types.ObjectId;
        type?: Types.ObjectId;
    }
    interface GolfReservationMeta extends ReservationBaseMeta {
        golfCartCount?: number;
        holeCount?: number;
    }
    enum TimeFieldType {
        Start = "start",
        CreatedAt = "createdAt"
    }
    interface AvailableEvent {
        time: Date;
        openSpots: number | null;
        totalSpots: number | null;
        existingEvent?: Model;
        status: AvailableEventStatus;
    }
    enum AvailableEventStatus {
        Open = "open",
        PublicBooked = "public-booked",
        PrivateBooked = "private-booked",
        PublicJoinable = "public-joinable",
        PrivateJoinable = "private-joinable",
        PublicNotJoinable = "public-not-joinable",
        PrivateNotJoinable = "private-not-joinable",
        Blocked = "blocked"
    }
    interface EventDataForCalendar {
        calendarID: Types.ObjectId;
        allTimes: Date[];
        eventInfo: AvailableEvent[];
        public: boolean;
        joinable: boolean;
    }
}
export default Event;
