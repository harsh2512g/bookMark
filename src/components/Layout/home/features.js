import { MessagesSquare, Heart, PenSquare, Trash2 } from 'lucide-react'
import Accordion from './accordian'

const features = [
  {
    title: "What is BookMark'd?",
    description:
      'BookMark’d is a transactional marketplace where students can buy and sell their textbooks to other students. On our website, students can sell their new or used textbook at a price they set to have other students buy them directly through the platform. Then, the students can arrange a time to meet and pick-up the items. Our goal is to make the textbook buying process quick and affordable, maybe even helping you earn some extra cash. Win-win for everyone.',
  },
  {
    title: 'Why should I use BookMark’d?',
    description:
      'You get your book FAST (and safely). BookMark’d is designed so students sell their textbooks to other students on campus. All students will have a verified student account, and all textbooks are validated for authenticity, so you can feel safe making a purchase. The nearest student is never more than 15 minutes away, and you can arrange a meeting time on campus that works best for your schedules. You’ll never have to wait in long bookstore lines or pay subscription fees ever again.You can make some extra $$$.You can sell textbooks for whatever price you chose, rather than having to accept a quote that other websites might offer you for reselling. The possibilities are pretty endless. You might meet your future classmate, or maybe your next best friend. Since all transactions are made between students, you’ll have the chance to meet other students on campus. To make the most of your experience, take that chance to build connections with other students, or ask questions about the classes you’re buying books for. You never know who you might meet! ',
  },
  {
    title: 'Do I have to be a student to use BookMark’d?',
    description:
      'Yes. During registration, you will be required to verify your .edu email address through a security authorization. This is to ensure that all of our buyers and sellers are students.',
  },
  {
    title: 'How do I pay for my book? ',
    description:
      "All payments are through the BookMark'd platform via Finix, a secure online payment platform. You simply insert your card details to pay for your book through the BookMark’d site, and BookMark’d will hold your payment from the seller until the textbook is picked up.",
  },
  {
    title: 'I have a really old textbook. Can I sell it on BookMark’d?',
    description:
      'We recommend that sellers do not sell textbook editions older than four years due to the lack of demand that may come from an outdated book. However, sellers are able to post any textbook, no matter how old or used it may be.',
  },
  {
    title: 'How do I get my book once I have purchased it?',
    description:
      'We recommend that the buyer and seller meet on campus to facilitate the textbook swap. To ensure the safety of the students, we recommend the students meet during the daytime and in open public places such as a library, police department, on-campus restaurant, etc.',
  },
  {
    title: 'The seller never showed up. How do I get my money back?',
    description:
      "Both the seller and the buyer have to confirm the pick-up has been completed for the payment to be finalized. If the seller or the buyer doesn't show up, simply report the transaction to our team and explain the situation so a refund can be processed for you.",
  },
  {
    title: 'Is BookMark’d available on my campus?',
    description:
      "BookMark’d is currently available in major Florida college campuses, such as UF, FAU, FIU, UM, and Miami Dade College. If your campus isn't on this list yet, reach out to us to make it happen!",
  },
  {
    title: 'Can I cancel or change my order once I’ve placed it?',
    description:
      'You can cancel or change an order anytime before you are scheduled to pick up your books with the seller. You have 48 hours to cancel your order after you have met up with the seller.',
  },
]

export function Features() {
  return (
    <div className="flex items-center max-w-7xl mx-auto bg-white py-24 sm:py-32">
      <div>
        <div className="px-6 lg:px-8">
          <div className="">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="w-[365px] font-sans text-3xl font-bold tracking-tight  text-green-700  ">
                What your fellow students ask us:
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 ml-10">
        {features.map((d) => {
          return <Accordion title={d?.title}>{d?.description}</Accordion>
        })}
      </div>
    </div>
  )
}
