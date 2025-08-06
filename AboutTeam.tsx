
'use client';

export default function AboutTeam() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Curator',
      description: 'Latest fashion trends identify karne aur quality products select karne mein expert.',
      image: 'adorable cute baby girl wearing stylish pink dress with tiny fashion accessories, professional baby photography, soft pastel background, innocent smile, fashionable baby outfit with small jewelry'
    },
    {
      name: 'Emma Davis',
      role: 'Style Consultant',
      description: 'Customer styling needs understand karne aur perfect outfit recommendations dene mein specialized.',
      image: 'cute baby boy in trendy blue outfit with tiny bow tie and stylish cap, professional baby portrait, soft lighting, fashionable baby clothes, adorable expression, modern baby fashion photography'
    },
    {
      name: 'Lisa Wilson',
      role: 'Customer Care',
      description: 'Customer satisfaction aur support provide karne mein dedicated, quick problem resolution expert.',
      image: 'sweet baby girl in purple tutu dress with cute headband and tiny shoes, professional baby photoshoot, soft pastel background, adorable smile, fashionable baby accessories and elegant baby outfit'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-100/30 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Hamari <span className="text-pink-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate fashion experts jo aapki style journey mein help karte hain aur best shopping experience provide karte hain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Bmember.image%7D&width=400&height=500&seq=team-${index}&orientation=portrait`}
                  alt={member.name}
                  className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Fashion Community</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Latest fashion updates, styling tips, aur exclusive offers ke liye hamare community ka hissa baniye.
            </p>
            <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
