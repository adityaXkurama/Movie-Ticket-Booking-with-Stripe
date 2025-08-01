import { Inngest } from "inngest";
import User from '../models/user.model.js'

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

//Inngest function to save user data to a database
const syncUserCreation = inngest.createFunction(
    {id:'sync-user-from-clerk'},
    {event:'clerk/user.created'},
    async({event})=>{
        const {id,first_name,last_name,email_addresses,image_url} =event.data
        const userData = {
            _id:id,
            email:email_addresses[0].email_address,
            name: first_name + " "+last_name
        }

        await User.create(userData)
    }
)

//delete account

const syncUserDeletion = inngest.createFunction(
    {id:'delete-user-with-clerk'},
    {event:'clerk/user.deleted'},
    async({event})=>{
        
        const {id} = event.data
        await User.findByIdAndDelete(id)
    }
)

//update user 

const syncUserUpdation = inngest.createFunction(
    {id:'update-user-from-clerk'},
    {event:'clerk/user.updated'},
    async({event})=>{
        const {id,first_name,last_name,email_addresses,image_url} =event.data
        const userData = {
            _id:id,
            email:email_addresses[0].email_address,
            name: first_name + " "+last_name
        }

        await User.findByIdAndUpdate(id,userData)
        
    }
)

// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];
